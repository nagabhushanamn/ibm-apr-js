package com.bank.mts.repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;

import org.springframework.stereotype.Repository;

import com.bank.mts.model.Account;

@Repository("accountRepository")
public class JpaAccountRepository implements AccountRepository {

	@PersistenceContext
	private EntityManager em;

	@Override
	public Account load(String num) {
		return em.find(Account.class, num);
	}

	@Override
	public void update(Account account) {
		em.merge(account);
	}

}
