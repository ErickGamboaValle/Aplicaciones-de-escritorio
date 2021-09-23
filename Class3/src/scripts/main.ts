import { photo } from "./photo";





class Counter{
    private current=0;

    count(){
        this.current++;
    }

    getCount(){
        return this.current;
    }
}