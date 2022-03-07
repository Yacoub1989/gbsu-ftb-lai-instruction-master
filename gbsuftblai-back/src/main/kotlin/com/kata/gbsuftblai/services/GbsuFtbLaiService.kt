package com.kata.gbsuftblai.services

import org.springframework.stereotype.Component

@Component
class GbsuFtbLaiService {

    fun convertNumber(inputNumber: Int): String {

	var str: String = inputNumber.toString();
	var characterarray = str.toList();
	var res: String = ""; 
	      if( inputNumber%3 === 0 ){
             res=res+"Gbsu";
			 }
          if( inputNumber%5 === 0 ){
             res=res+"Ftb";
			 }

        for (c in characterarray){
           if(c=='3'){
                res=res+"Gbsu"
				}
          if(c=='5'){
            res=res+"Ftb"
			}
          if(c=='7'){
             res=res+"Lai"
        }
		}
         if(!res.equals(""))
           return res;
        else
          return str;
    }

}