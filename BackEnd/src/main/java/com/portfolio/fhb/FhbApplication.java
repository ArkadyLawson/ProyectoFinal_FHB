package com.portfolio.fhb;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@SpringBootApplication
public class FhbApplication {

	public static void main(String[] args) {
		SpringApplication.run(FhbApplication.class, args);
	}
        
        @Bean
        public WebMvcConfigurer corsConfigurer(){
            return new WebMvcConfigurer(){
                @Override
                public void addCorsMappings(CorsRegistry registry){
                    registry.addMapping("/**").allowedOrigins("https://portfoliofhbfront.web.app/").allowedMethods("GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS");
                }
            };
        }

}
