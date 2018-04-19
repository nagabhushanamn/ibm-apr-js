package com.shop.accounts;

import java.util.List;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

import com.shop.accounts.model.Account;
import com.shop.accounts.repository.AccountRepository;

@SpringBootApplication
@EnableJpaRepositories
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
	}
	
//	@Bean
//	public CommandLineRunner test(AccountRepository accountRepository) {
//		return (args)->{
//			List<Account> accounts=accountRepository.findAll();
//			for(Account account:accounts) {
//				System.out.println(account);
//			}
//		};
//	}
	
}
