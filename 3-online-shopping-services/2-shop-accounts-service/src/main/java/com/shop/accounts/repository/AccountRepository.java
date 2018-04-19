package com.shop.accounts.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.shop.accounts.model.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, String> {

}
