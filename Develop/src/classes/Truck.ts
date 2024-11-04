// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Motorbike from './Motorbike.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';
import { Interface } from 'readline';


class Truck extends Vehicle implements AbleToTow {
    vin: string; color: string; make: string; model: string; year: number; weight: number; topSpeed: number; wheels: Wheel[]; towingCapacity: number;

    constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[], towingCapacity: number) {
        super();
        this.vin = vin;
        this.color = color;
        this.make = make;
        this.model = model;
        this.year = year;
        this.weight = weight;
        this.topSpeed = topSpeed;
        this.wheels = wheels;
        this.towingCapacity = towingCapacity;

        if (wheels.length === 4) {
            this.wheels = wheels;
        } else {
            this.wheels = [];
            for (let i = 0; i < 4; i++) {
                this.wheels.push(new Wheel());
            }
        }
    }
    tow(vehicle: Truck | Motorbike | Car): void {
        console.log('vehicle: ', vehicle);
        const vehicleTest = vehicle.make && vehicle.model ? `make: ${vehicle.make} model: ${vehicle.model}` : "no vehicle"
        if (vehicle.weight <= this.towingCapacity) {
            console.log('The vehicle is being Towed')
        }
        else {console.log('This vehicle is too heavy to be towed') }
    }
    override printDetails(): void {
        super.printDetails();
        console.log(this.vin);
        console.log(this.color);
        console.log(this.make);
        console.log(this.model);
        console.log(this.year);
        console.log(this.weight);
        console.log(this.topSpeed);
        console.log(this.wheels);
        console.log(this.towingCapacity);
    }
}

// Export the Truck class as the default export
export default Truck;