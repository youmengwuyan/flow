package com.dragon.flow.config;

import cn.dev33.satoken.context.SaHolder;
import cn.dev33.satoken.filter.SaServletFilter;
import cn.dev33.satoken.interceptor.SaAnnotationInterceptor;
import cn.dev33.satoken.interceptor.SaRouteInterceptor;
import cn.dev33.satoken.strategy.SaStrategy;
import com.dragon.tools.common.ReturnCode;
import com.dragon.tools.vo.ReturnVo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.AnnotatedElementUtils;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/**
 * @author bruce.liu
 * @description satoken配置
 * @date 2022/1/5 13:08
 * Copyright © 2021~2035
 */
@Configuration
public class SaTokenConfigure implements WebMvcConfigurer {
    /**
     * 注册Sa-Token 的拦截器，打开注解式鉴权功能
     */
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        // 注册注解拦截器
        registry.addInterceptor(new SaAnnotationInterceptor())
                .excludePathPatterns("/doLogin")
                .excludePathPatterns("/**/login")
                .excludePathPatterns("/idm/**")
                .excludePathPatterns("/swagger-resources/**")
                .excludePathPatterns("/swagger-ui.html/**")
                .excludePathPatterns("/v2/api-docs")
                .excludePathPatterns("/webjars/**")
                .addPathPatterns("/flow/**");
        // 注册路由拦截器
        registry.addInterceptor(new SaRouteInterceptor())
                .excludePathPatterns("/**")
                .excludePathPatterns("/swagger-resources/**")
                .excludePathPatterns("/v2/api-docs")
                .excludePathPatterns("/swagger-ui.html/**")
                .excludePathPatterns("/webjars/**")
                .excludePathPatterns("/idm/**")
                .excludePathPatterns("/doLogin")
                .excludePathPatterns("/**/login")
                .addPathPatterns("/flow/**");
    }

    /**
     * 注册 [Sa-Token 全局过滤器]
     */
//    @Bean
//    public SaServletFilter getSaServletFilter() {
//        return new SaServletFilter()
//                // 指定 [拦截路由] 与 [放行路由]
//                .addInclude("/**").addExclude("/favicon.ico")
//                // 认证函数: 每次请求执行
//                .setAuth(obj -> {
//                    // System.out.println("---------- sa全局认证 " + SaHolder.getRequest().getRequestPath());
//                })
//                // 异常处理函数：每次认证函数发生异常时执行此函数
//                .setError(e -> {
//                    System.out.println("---------- sa全局异常 ");
//                    ReturnVo<String> returnVo = new ReturnVo<>(ReturnCode.FAIL, e.getMessage());
//                    return returnVo;
//                })
//                // 前置函数：在每次认证函数之前执行
//                .setBeforeAuth(r -> {
//                    // ---------- 设置一些安全响应头 ----------
//                    SaHolder.getResponse()
//                            // 服务器名称
//                            .setServer("sa-server")
//                            // 是否可以在iframe显示视图： DENY=不可以 | SAMEORIGIN=同域下可以 | ALLOW-FROM uri=指定域名下可以
//                            .setHeader("X-Frame-Options", "SAMEORIGIN")
//                            // 是否启用浏览器默认XSS防护： 0=禁用 | 1=启用 | 1; mode=block 启用, 并在检查到XSS攻击时，停止渲染页面
//                            .setHeader("X-XSS-Protection", "1; mode=block")
//                            // 禁用浏览器内容嗅探
//                            .setHeader("X-Content-Type-Options", "nosniff")
//                    ;
//                })
//                ;
//    }

    /**
     * 重写 Sa-Token 框架内部算法策略
     */
    @Autowired
    public void rewriteSaStrategy() {
        // 重写Sa-Token的注解处理器，增加注解合并功能
        SaStrategy.me.getAnnotation = (element, annotationClass) -> {
            return AnnotatedElementUtils.getMergedAnnotation(element, annotationClass);
        };
    }
}
