package labtasks;
public class OnlineOrder extends CustomerOrder {
    private String address;
    private int tracking;

    OnlineOrder(){
        this.address = "Kot Radha Kishan ,Pakistan";
        this.tracking = 43533;
    }

    boolean Customerinformation(){
        System.out.println("Customer Name : " + customername);
        System.out.println("Customer Address : " + address);
        System.out.println("Customer Tracking No : " + tracking);
        System.out.println("Customer Order ID : " + orderid);
        return false;
    }

}
