package com.shop.accounts.web;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.shop.accounts.model.Account;
import com.shop.accounts.repository.AccountRepository;

@RestController
@RequestMapping("/accounts/")
public class AccountController {

	@Autowired
	private AccountRepository accountRepository;

	@GetMapping("/{userName}")
	public Account get(@PathVariable String userName) {
		Optional<Account> optional = accountRepository.findById(userName);
		if (optional.isPresent()) {
			return optional.get();
		} else {
			return null;
		}
	}

}
