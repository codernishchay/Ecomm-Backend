
import { Request , Response , NextFunction} from "express"; 
const productModel = require("../models/products"); 


exports.createProduct = async (req: Request,res: Response)=>{
    const product = new  productModel({
        "title" : req.body.title, 
        "body": req.body.body, 
        "price": req.body.price, 
        "mrp": req.body.mrp, 
        "hidden": req.body.hidden, 
    });
    await product.save();
    return res.status(201).json({
        status : "201",
        Message : "Product Saved", 
    })
}

exports.listall = async (req: Request,res: Response)=>{
    const x = await productModel.find();  
    return res.status(201).json(x); 
}

exports.productUpdatebyID = async (req: Request,res: Response)=>{
    
    console.log(req.params);  
    console.log(req.body);
    const prodToUpdate = await productModel.findById(req.params.id);
     console.log(req.params); 
     if(!req.params.id){
         return res.status(404).json({
             status: "404", 
             message: "Parameter getting null", 
         })
     }
     console.log(prodToUpdate); 
     if(!prodToUpdate) { return res.status(400).json({
         status:"400", 
         Message: "Product not found", 
     }) ; 
    }
    prodToUpdate.update(req.body , function(err: String, result : String){
    if(err){
         return res.status(400).json({
            status:"400", 
            Message: "Product not found", 
        })}  
    else { 
        console.log(result); 
        return res.status(201).json({
        status : "201",
        Message : "Product Saved", 
    })
    }
}); 
}


exports.searchProductByName = async (req: Request,res: Response)=>{
    console.log("Hello there"); 
    res.send("hello there");
}
