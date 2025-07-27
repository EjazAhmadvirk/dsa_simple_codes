package labtasks;
public class CustomerOrder {
    protected int orderid;
    protected String customername;

    CustomerOrder(){
        this.customername = "Ejaz_Ahmad_Virk";
        this.orderid = 34620;
    }

    boolean Customerinformation(){
        System.out.println("Customer Name : " + customername);
        System.out.println("Customer Order ID : " + orderid);
        return false;
    }
    
}
