import { connectDB } from "@/app/lib/db";
import Product from "@/models/product";
import { NextResponse } from "next/server";


export  async function POST(req){
    connectDB();
    let data = await req.json();

    if(data.type== 'changeProductStatus'){

      await Product.findByIdAndUpdate( data.pId, {$set:{active: data.val}}  )
      return NextResponse.json({success:true});

    }else{

      // data.createdBy = '444';
      let newP = new Product(data);
      await newP.save();
      return NextResponse.json(newP);

    }

}



export async function GET(req){
    await connectDB();

    let obj = {};

      let a1 = req?.nextUrl?.searchParams.get('hello');

      if(a1){
        obj.createdBy = a1;
      }else{
        obj.active = true;
      }
         
    let p =  await Product.find(obj);
    return NextResponse.json( {products:p} );
}