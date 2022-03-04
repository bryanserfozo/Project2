package com.revature.BookingHotel.Models;

public class HotelAddress {

    private String streetAddress;
    private String locality;
    private String postalCode;
    private String region;

    public HotelAddress() {
    }

    public HotelAddress(String streetAddress, String locality, String postalCode, String region) {
        this.streetAddress = streetAddress;
        this.locality = locality;
        this.postalCode = postalCode;
        this.region = region;
    }

    public String getStreetAddress() {
        return streetAddress;
    }

    public void setStreetAddress(String streetAddress) {
        this.streetAddress = streetAddress;
    }

    public String getLocality() {
        return locality;
    }

    public void setLocality(String locality) {
        this.locality = locality;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    @Override
    public String toString() {
        return "HotelAddress{" +
                "streetAddress='" + streetAddress + '\'' +
                ", locality='" + locality + '\'' +
                ", postalCode='" + postalCode + '\'' +
                ", region='" + region + '\'' +
                '}';
    }
}
