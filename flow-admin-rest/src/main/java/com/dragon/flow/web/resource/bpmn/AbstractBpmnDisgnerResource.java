package com.dragon.flow.web.resource.bpmn;

import com.dragon.flow.model.base.Category;
import com.dragon.flow.model.flowable.ModelInfo;
import com.dragon.flow.model.org.Company;
import com.dragon.flow.model.org.Personal;
import com.dragon.flow.model.org.PersonalRole;
import com.dragon.flow.model.org.Role;
import com.dragon.flow.service.base.ICategoryService;
import com.dragon.flow.service.flowable.IFlowProcessDiagramService;
import com.dragon.flow.service.flowable.IFlowableBpmnService;
import com.dragon.flow.service.flowable.IModelInfoService;
import com.dragon.flow.service.org.*;
import com.dragon.flow.vo.flowable.model.HighLightedNodeVo;
import com.dragon.flow.vo.flowable.model.ModelInfoVo;
import com.dragon.flow.vo.flowable.task.ActivityVo;
import com.dragon.flow.vo.org.OrgTreeVo;
import com.dragon.flow.vo.org.RolePersonalVo;
import com.dragon.flow.vo.pager.ParamVo;
import com.dragon.flow.web.resource.BaseResource;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.pager.PagerModel;
import com.dragon.tools.vo.ReturnVo;
import org.apache.commons.lang.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.io.ByteArrayInputStream;
import java.util.ArrayList;
import java.util.List;

/**
 * @author bruce.liu
 * @description 抽象的bpmn设计器resource
 * @date 2021/7/9 10:02
 */
public abstract class AbstractBpmnDisgnerResource extends BaseResource {
    @Autowired
    private IFlowableBpmnService flowableBpmnService;
    @Autowired
    private IFlowProcessDiagramService flowProcessDiagramService;
    @Autowired
    private IDepartmentService departmentService;
    @Autowired
    private IPersonalService personalService;
    @Autowired
    private IPersonalRoleService personalRoleService;
    @Autowired
    private ICategoryService categoryService;
    @Autowired
    private IModelInfoService modelInfoService;
    @Autowired
    private ICompanyService companyService;
    @Autowired
    private IRoleService roleService;

    /*****************************************************bpmn相关的*************************************************************/
    @PostMapping(value = "/saveBpmnModel", produces = "application/json")
    public ReturnVo<String> saveBpmnModel(@RequestBody ModelInfoVo modelInfoVo) {
        ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        ByteArrayInputStream byteArrayInputStream = new ByteArrayInputStream(modelInfoVo.getModelXml().getBytes());
        ReturnVo<String> representationReturnVo = flowableBpmnService.importBpmnModel(modelInfoVo.getModelId(),
                modelInfoVo.getFileName(), byteArrayInputStream, this.getLoginUser());
        if (!representationReturnVo.isSuccess()) {
            returnVo = new ReturnVo<>(ReturnCode.FAIL, representationReturnVo.getMsg());
            return returnVo;
        } else {
            returnVo.setData(representationReturnVo.getData());
        }
        return returnVo;
    }

    @GetMapping(value = "/getOneActivityVoByProcessInstanceIdAndActivityId/{processInstanceId}/{activityId}", produces = "application/json")
    public ReturnVo<ActivityVo> getOneActivityVoByProcessInstanceIdAndActivityId(@PathVariable String processInstanceId, @PathVariable String activityId) {
        ReturnVo<ActivityVo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        ActivityVo processActivityVo = flowProcessDiagramService.getOneActivityVoByProcessInstanceIdAndActivityId(processInstanceId, activityId);
        returnVo.setData(processActivityVo);
        return returnVo;
    }

    @GetMapping(value = "/getBpmnByModelId/{modelId}", produces = "application/json")
    public ReturnVo<ModelInfoVo> getBpmnByModelId(@PathVariable String modelId) {
        ReturnVo<ModelInfoVo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "获取数据成功！");
        ModelInfoVo modelInfoVo = flowableBpmnService.loadBpmnXmlByModelId(modelId);
        returnVo.setData(modelInfoVo);
        return returnVo;
    }

    @GetMapping(value = "/getHighLightedNodeVoByProcessInstanceId/{processInstanceId}", produces = "application/json")
    public ReturnVo<HighLightedNodeVo> getHighLightedNodeVoByProcessInstanceId(@PathVariable String processInstanceId) {
        ReturnVo<HighLightedNodeVo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        HighLightedNodeVo highLightedNodeVo = flowProcessDiagramService.getHighLightedNodeVoByProcessInstanceId(processInstanceId);
        returnVo.setData(highLightedNodeVo);
        return returnVo;
    }

    @GetMapping(value = "/getBpmnByModelKey/{modelKey}", produces = "application/json")
    public ReturnVo<ModelInfoVo> getBpmnByModelKey(@PathVariable String modelKey) {
        ReturnVo<ModelInfoVo> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "获取数据成功！");
        ModelInfoVo modelInfoVo = flowableBpmnService.loadBpmnXmlByModelKey(modelKey);
        returnVo.setData(modelInfoVo);
        return returnVo;
    }

    @GetMapping(value = "/getTaskFormInfoByModelKey/{modelKey}", produces = "application/json")
    public ReturnVo<List> getTaskFormInfoByModelKey(@PathVariable String modelKey) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.WARN, "暂未开放!");
        return returnVo;
    }

    /*********************************************************组织的************************************************************/
    @GetMapping(value = "/getOrgTree", produces = "application/json")
    public ReturnVo<List> getOrgTree() {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<OrgTreeVo> orgTreeVos = departmentService.getOrgTree();
        returnVo.setData(orgTreeVos);
        return returnVo;
    }

    @PostMapping(value = "/getPersonalPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getPersonalPagerModel(@RequestBody ParamVo<Personal> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<Personal> pm = personalService.getPagerModelByWrapper(params.getEntity(), params.getQuery());
        returnVo.setData(pm);
        return returnVo;
    }

    @PostMapping(value = "/getPersonalsByRole/{roleId}", produces = "application/json")
    public ReturnVo<List> getPersonalsByRole(@PathVariable String roleId, @RequestBody PersonalRole personalRole) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        personalRole.setRoleId(roleId);
        List<RolePersonalVo> rolePersonalVos = new ArrayList<>();
        if (StringUtils.isNotEmpty(roleId)) {
            rolePersonalVos = this.personalRoleService.getRolePersonals(personalRole);
        }
        returnVo.setData(rolePersonalVos);
        return returnVo;
    }

    @PostMapping(value = "/getCompanies", produces = "application/json")
    public ReturnVo<List> getCompanies(@RequestBody Company company) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<Company> datas = companyService.getCompanies(company);
        returnVo.setData(datas);
        return returnVo;
    }

    @PostMapping(value = "/getRolePagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getRolePagerModel(@RequestBody ParamVo<Role> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<Role> pm = roleService.getPagerModelByWrapper(params.getEntity(), null, params.getQuery());
        returnVo.setData(pm);
        return returnVo;
    }

    @PostMapping(value = "/getMatrixRoles/{roleType}", produces = "application/json")
    public ReturnVo<List> getMatrixRoles(@PathVariable Integer roleType) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.WARN, "暂未开放!");
        return returnVo;
    }

    /******************************************************基础数据接口************************************************************/
    @PostMapping(value = "/getCategories", produces = "application/json")
    public ReturnVo<List> getCategories(@RequestBody Category category) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        List<Category> categories = categoryService.getCategories(category);
        returnVo.setData(categories);
        return returnVo;
    }

    @PostMapping(value = "/getModelInfoPagerModel", produces = "application/json")
    public ReturnVo<PagerModel> getModelInfoPagerModel(@RequestBody ParamVo<ModelInfo> params) {
        ReturnVo<PagerModel> returnVo = new ReturnVo<>(ReturnCode.SUCCESS, "OK");
        PagerModel<ModelInfo> pm = modelInfoService.getPagerModel(params.getEntity(), params.getQuery());
        returnVo.setData(pm);
        return returnVo;
    }

    /******************************************************变量设置接口************************************************************/
    @GetMapping(value = "/getFormVariablesByCode/{formCode}", produces = "application/json")
    public ReturnVo<List> getFormVariablesByCode(@PathVariable String formCode) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.WARN, "暂未开放!");
        return returnVo;
    }

    /**
     * 查询角色人员
     * @param orgId 组织id
     * @param flag 标记 one单个 multi多个
     * @return
     */
    @GetMapping(value = "/getRoleVariablesByOrgId/{orgId}/{flag}", produces = "application/json")
    public ReturnVo<List> getRoleVariablesByOrgId(@PathVariable String orgId,@PathVariable String flag) {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.WARN, "暂未开放!");
        return returnVo;
    }

    @GetMapping(value = "/getDeptVariables", produces = "application/json")
    public ReturnVo<List> getDeptVariables() {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.WARN, "暂未开放!");
        return returnVo;
    }

    @GetMapping(value = "/getCompanyVariables", produces = "application/json")
    public ReturnVo<List> getCompanyVariables() {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.WARN, "暂未开放!");
        return returnVo;
    }

    @GetMapping(value = "/getMatrixDeptVariables", produces = "application/json")
    public ReturnVo<List> getMatrixDeptVariables() {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.WARN, "暂未开放!");
        return returnVo;
    }

    @GetMapping(value = "/getMatrixCompanyVariables", produces = "application/json")
    public ReturnVo<List> getMatrixCompanyVariables() {
        ReturnVo<List> returnVo = new ReturnVo<>(ReturnCode.WARN, "暂未开放!");
        return returnVo;
    }
}
