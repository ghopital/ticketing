import axios from "axios";

const buildClient = (req, res, next) =>{
    if (typeof window === "undefined") {
        return axios.create({
            //baseURL: `http://ingress-nginx-controller.ingress-nginx.svc.cluster.local`, //when running locally
            baseURL: `http://www.emciyou.xyz`, //when running on a Cloud provider
            headers: req.headers
        })
      } else {
        return axios.create({
            baseURL: `/`            
        })
      }
}

export default buildClient