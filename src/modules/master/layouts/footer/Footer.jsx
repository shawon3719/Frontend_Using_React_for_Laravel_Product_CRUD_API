import React from 'react'
const Footer = (props) => {
    return (
        <>
            <footer className="sticky-footer bg-white">
                <div className="container my-auto">
                    <div className="copyright text-center my-auto">
                        <span>Copyright &copy; 2021 <a href="https://github.com/shawon3719">Masudul Hasan Shawon</a></span>
                    </div>
                </div>
            </footer>

            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
        </>

    );
}

export default Footer;