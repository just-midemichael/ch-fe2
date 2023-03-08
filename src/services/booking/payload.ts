export interface BookingPayload {
  Bookings: IBooking[]
  Cost: number,
  CouponId?: string,
  CouponValue?: number,
  Payment: IPayment,
  Id?: string;
}


export interface IBooking {
  RoomId: string,
  Cost: number,
  HotelId: string,
  Details?: any,
  Type: BookingTypes,
  HotelName: string,
  RoomName: string,
  CheckOutDate: string
  CheckInDate: string,
}

export enum BookingTypes {
  HOTELROOM = 0,
}

export interface IPayment {
  Method?: string,
  Option: PaymentOption,
  Reference: string,
  Status: PaymentStatus
}

export enum PaymentStatus {
  PENDING = 0,
  COMPLETE = 1,
  CANCELLED = 2
}

export enum PaymentOption {
  ONLINE = 0,
  ONSITE = 1
}