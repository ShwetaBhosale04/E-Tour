package mypack;

import java.util.List;

public interface SignupDAO 
{
	void addCustomer(Signup p);
	List<Signup> getCustomer(String password);
	List<Signup> getCustomers();
}
