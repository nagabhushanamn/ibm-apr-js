package com.shop.order;

import java.util.Arrays;
import java.util.List;

import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import com.shop.order.bill.Billing;
import com.shop.order.bill.BillingImpl;
import com.shop.order.pm.PriceMatrix;
import com.shop.order.pm.PriceMatrixImpl_v1;
import com.shop.order.pm.PriceMatrixImpl_v2;

public class App {

	public static void main(String[] args) {
		// init
		ConfigurableApplicationContext context = null;
		context = new ClassPathXmlApplicationContext("applicationContext.xml");
		// use
		List<String> cart = Arrays.asList("13123", "123123");
		Billing billing = context.getBean("billing1", Billing.class);
		double total = billing.getTotalPrice(cart);
		System.out.println("Total :"+total);
		// destroy
		context.close();
	}

}
