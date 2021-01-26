import React from 'react'
import Layout from '../layouts/Layout';

const DefaultContainer = () => {
    return ( 
        <>
            <Layout sidebar={false} dashboard={false} title="Home Page Public">
            </Layout>
        </>
     );
}
 
export default DefaultContainer;