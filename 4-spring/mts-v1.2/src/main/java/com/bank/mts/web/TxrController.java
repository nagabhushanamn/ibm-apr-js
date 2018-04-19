package com.bank.mts.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.bank.mts.model.Account;
import com.bank.mts.repository.AccountRepository;
import com.bank.mts.service.TxrService;

@Controller
public class TxrController {

	@Autowired
	private TxrService txrService;

	@Autowired
	private AccountRepository accountRepository;

	@RequestMapping(value = "/txr", method = RequestMethod.POST)
	public ModelAndView doTxr(@RequestParam double amount, @RequestParam String fromAccNum,
			@RequestParam String toAccNum) {
		txrService.txr(amount, fromAccNum, toAccNum);
		
		Account account1=accountRepository.load(fromAccNum);
		Account account2=accountRepository.load(toAccNum);
		
		ModelAndView mav = new ModelAndView();
		mav.setViewName("txr-status");
		mav.addObject("statusMessage", "Txr success");
		mav.addObject("fromAccount",account1);
		mav.addObject("toAccount",account2);
		return mav;
	}

}
