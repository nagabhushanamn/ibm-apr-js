package com.shop.order.bill;

import java.util.List;

public interface Billing {

	double getTotalPrice(List<String> cart);

}