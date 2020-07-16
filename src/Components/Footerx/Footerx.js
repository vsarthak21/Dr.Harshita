import React from 'react';
import classes from "./Footerx.module.css";
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';

const Footerx = () => {
    return (
        <div id={"contact"}>
            <Footer
                columns={[
                    {
                        icon: (
                            <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
                        ),
                        title: '语雀',
                        url: 'https://yuque.com',
                        description: '知识创作与分享工具',
                        openExternal: true,
                    },
                ]}
                bottom="Made with ❤️ by Sarthak"
            />
        </div>
    );
}
export default Footerx;