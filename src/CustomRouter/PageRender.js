import React from 'react'
import {useParams} from "react-router-dom"
import PageNotFound from '../Components/PageNotFount/PageNotFound';
const generatePage = (pageName) =>{
    const component = () => require(`../Pages/${pageName}`).default;
    try {
        return React.createElement(component());
    } catch (err) {
        return <PageNotFound />
    }
}

const PageRender = () => {
    const {page,id } = useParams();
    // console.log(useParams());
    let pageName = "";
    if(id){
        pageName = `${page}/[id]`;
    }else{
        pageName = `${page}`;
    }
    return generatePage(pageName);
}

export default PageRender