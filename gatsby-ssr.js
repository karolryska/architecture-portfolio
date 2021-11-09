import React from 'react';
import Layout from './src/templates/Layout/Layout';

export function wrapPageElement({ element, props }) {
    console.log(props);
    return (
        <Layout
            title={
                props.location.state && props.location.state.name
                    ? props.location.state.name
                    : 'feature'
            }>
            {element}
        </Layout>
    );
}
