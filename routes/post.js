const { response } = require('express');
const express = require('express');
const router = express.Router();
const Post = require('../models/Mobil');

//Getall
router.get('/', async (req, res)=>{
    try {
        const all = await Post.find();
        res.json(all);
    } catch (err) {
        res.json({message:err})
    }
});

//Submit
router.post('/post', async(req, res)=>{
    const post = new Post({
        nama: req.body.nama,
        merk: req.body.merk,
        tahun: req.body.tahun
    });
    try{
    const savedPost = await post.save()
    res.json(savedPost)
    }catch(err){
        res.json({message: err})
    }
});

//search by id
router.get('/getid/:Id', async (req, res)=>{
    try{
    const post = await Post.findById(req.params.Id);
    res.json(post);
    }catch(err){ 
        res.json({message: err})
    }
});

//Delete
router.delete('/del/:Id', async (req,res)=>{
    try {
        const removedPost = await Post.remove({_id: req.params.Id})
        res.json(removedPost)
    } catch (err) {
        res.json({message:err})
    }
});

//Update
router.put('/up/:Id', async (res, req)=>{
    try {
        const updatePost = await Post.updateOne(
            {_id: req.params.Id},
            {$set: {nama: req.body.nama}}
        );
        res.json(updatePost);
    } catch (err) {
        res.json({message:err})
    }
})

module.exports = router;