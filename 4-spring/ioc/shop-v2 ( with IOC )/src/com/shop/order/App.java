package com.shop.order;

import java.util.Arrays;
import java.util.List;

import com.shop.order.bill.Billing;
import com.shop.order.bill.BillingImpl;
import com.shop.order.pm.PriceMatrix;
import com.shop.order.pm.PriceMatrixImpl_v1;
import com.shop.order.pm.PriceMatrixImpl_v2;
public class App {

	public static void main(String[] args) {
		// init
		PriceMatrix priceMatrixV1=new PriceMatrixImpl_v1();
		PriceMatrix priceMatrixV2=new PriceMatrixImpl_v2();
		Billing billing = new BillingImpl(priceMatrixV2);
		// use
		List<String> cart = Arrays.asList("13123", "123123");
		double totalPrice = billing.getTotalPrice(cart);
		System.out.println("Total Price : " + totalPrice);
		System.out.println("Thanks for shopping");
		// destroy
		//..
	}

}
