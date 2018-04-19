package com.shop.order;

import java.util.Arrays;
import java.util.List;

import com.shop.order.bill.BillingImpl;
public class App {

	public static void main(String[] args) {
		// init
		BillingImpl billing = new BillingImpl();
		// use
		List<String> cart = Arrays.asList("13123", "123123");
		double totalPrice = billing.getTotalPrice(cart);
		System.out.println("Total Price : " + totalPrice);
		System.out.println("Thanks for shopping");
		// destroy
		//..
	}

}
