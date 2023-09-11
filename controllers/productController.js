const db = require('../models');

const Product = db.products
const Review = db.reviews

// 1. Create new product
const addProduct = async(req,res)=>{
    let info ={
        title :req.body.title,
        price: req.body.price,
        description : req.body.description,
        published :req.body.published ? req.body.published : false
        }

        const product = await Product.create(info)
        res.status(200).send(product);
        console.log(product);
    }

    // 2. get all products

    const getAllProducts = async(req,res)=>{
        let products = await Product.findAll({}) ;
        res.status(200).send(products)
    }

    // 3. get one product
    const getOneProduct = async(req,res)=>{
        let id =req.body.id;
        let products = await Product.findOne({where :{id :id}}); 
        res.status(200).send(products)
    }

     // 4. update product
     const updateProduct = async(req,res)=>{

        let id =req.body.id;
        let product = await Product.update(req.body, {where :{id :id}}) ;
        res.status(200).send(product)
    }

    // 5. delete product by id
    const deleteProduct = async(req,res)=>{
        let id =req.body.id;
         await Product.destroy({where :{id :id}}) 
        res.status(200).send('product deleted successfully!');
    }

     // 6. publish product by id
     const getPublishedProduct = async(req,res)=>{
        let id =req.body.id;
        const products= await Product.findAll({where :{published:true}}) 
        res.status(200).send(products);
    }

    module.exports={
        addProduct,
        getAllProducts,
        getOneProduct,
        updateProduct,
        deleteProduct,
        getPublishedProduct
    }