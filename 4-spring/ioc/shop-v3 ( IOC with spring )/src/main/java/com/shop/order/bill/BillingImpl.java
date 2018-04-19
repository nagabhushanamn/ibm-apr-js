package com.shop.order.bill;

import java.util.List;

import com.shop.order.pm.PriceMatrix;


/*
 *  design & performance issues
 *  ---------------------------
 *  
 *  -> tight-coupling b/w dependent & dependency
 *  			==> can't extend component with new-features
 *  -> too many duplicate dependency-instances are created & destroyed
 *  			==> slow, memory-usage high
 *  -> unit-testing not possible
 *  			==> dev & bug-fix slow
 *  
 *  why these issues ?
 *  
 *   ==> dependent itself creating its own dependency
 *   
 *   soln :
 *   
 *   	==> don't create , do Lookup
 *   
 *   limitation on lookup:
 *   
 *   	==> location tight-coupling
 *   
 *   best soln :
 *   
 *   	==> don't create/loookup , inject by 'some-one'  ( IOC )
 *   
 *   	how to implement IOC ?
 *   
 *   	=> using 'Dependency Injection' ( DI )
 *   
 *   		- constructor DI
 *           - setter DI
 *           - field
 *           - method
 *           
 *      -----------------------------------------------
 *      
 *          S — Single responsibility principle
			O — Open for extension & closed for modification principle
			L — Liskov substitution principle
			I — Interface segregation principle
			D — Dependency Inversion principle
			
		-----------------------------------------------

 *  
 * 
 */

public class BillingImpl implements Billing {
	
	private PriceMatrix priceMatrix;
	public BillingImpl(PriceMatrix priceMatrix) {
		this.priceMatrix=priceMatrix;
	}
	/* (non-Javadoc)
	 * @see com.shop.order.bill.Billing#getTotalPrice(java.util.List)
	 */
	public double getTotalPrice(List<String> cart) {
		double total = 0.0;
		for (String item : cart) {
			total += priceMatrix.getPrice(item);
		}
		return total;
	}
}



