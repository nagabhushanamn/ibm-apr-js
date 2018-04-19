package com.bank.mts.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.bank.mts.model.Account;
import com.bank.mts.repository.AccountRepository;

@Service("txrService")
public class TxrServiceImpl implements TxrService {

	@Autowired
	private AccountRepository accountRepository;

	@Transactional
	@Override
	public void txr(double amount, String fromAccNum, String toAccNum) {
		// load accounts
		Account fromAccount = accountRepository.load(fromAccNum);
		Account toAccount = accountRepository.load(toAccNum);
		// debit
		fromAccount.setBalance(fromAccount.getBalance() - amount);
		// credit
		toAccount.setBalance(toAccount.getBalance() + amount);
		// updateÏ
		accountRepository.update(fromAccount);
		accountRepository.update(toAccount);
	}

}
