package com.bank.mts;

import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.bank.mts.config.MTSConfig;
import com.bank.mts.model.Account;
import com.bank.mts.repository.AccountRepository;
import com.bank.mts.service.TxrService;

public class App {

	public static void main(String[] args) {

		// init
		ConfigurableApplicationContext context = null;
		context = new AnnotationConfigApplicationContext(MTSConfig.class);

		// --------------------------------------------------------------
		// use
		TxrService txrService = context.getBean("txrService", TxrService.class);
		txrService.txr(500, "2", "1");

		// --------------------------------------------------------------

		// For Testing
		AccountRepository accountRepository = context.getBean("accountRepository", AccountRepository.class);
		Account account1 = accountRepository.load("1");
		Account account2 = accountRepository.load("2");

		System.out.println(account1);
		System.out.println(account2);
		
		// --------------------------------------------------------------

		// destroy
		context.close();

	}

}
