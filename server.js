import express from 'express'
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackConfig from './webpack.config';


const app=express();

app.set('port', process.env.PORT || 3000);
app.use(webpackDevMiddleware(webpack(webpackConfig)));
app.get('/',(req,res)=>{
    res.send('Hello');
})
app.listen(app.get('port'), () =>{
    console.log('server on', app.get('port'))
});