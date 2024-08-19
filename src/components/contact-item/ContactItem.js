import React from 'react';
import './contact-item.css'; // Styles for Contacts

const ContactItem = () => {
  return (
    <ul className="contact-navbar">
      <li className="contact-items">
        <img
          src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='79.168'%20height='39.958'%20viewBox='0%200%2079.168%2039.958'%3e%3cdefs%3e%3cstyle%3e.a{fill:%23f42c37;stroke:%23f42c37;stroke-width:0.5px;}%3c/style%3e%3c/defs%3e%3cg%20transform='translate(-2.45%20-26.05)'%3e%3cpath%20class='a'%20d='M34,65.758H73.791a7.6,7.6,0,0,0,7.575-7.575V33.875A7.6,7.6,0,0,0,73.791,26.3H34a7.6,7.6,0,0,0-7.575,7.575V58.183A7.658,7.658,0,0,0,34,65.758ZM28.506,33.875A5.489,5.489,0,0,1,34,28.381H73.791a5.489,5.489,0,0,1,5.494,5.494V58.183a5.489,5.489,0,0,1-5.494,5.494H34a5.489,5.489,0,0,1-5.494-5.494ZM34.5,56.518,47.236,45.28,34.583,35.457a1.008,1.008,0,1,1,1.249-1.582L53.979,47.944,72.043,33.792a1.008,1.008,0,0,1,1.249,1.582L60.805,45.2,73.458,56.518a1.036,1.036,0,0,1,.083,1.415.9.9,0,0,1-.749.333.945.945,0,0,1-.666-.25L59.14,46.445l-4.578,3.58a.8.8,0,0,1-1.165,0l-4.412-3.413-13.153,11.4a.945.945,0,0,1-.666.25.9.9,0,0,1-.749-.333A1.031,1.031,0,0,1,34.5,56.518ZM22.429,46.029a.962.962,0,0,1-1,1H9.693a1,1,0,0,1,0-2H21.43A1.012,1.012,0,0,1,22.429,46.029ZM2.7,38.2a.962.962,0,0,1,1-1H21.347a1,1,0,1,1,0,2H3.782A.983.983,0,0,1,2.7,38.2Zm19.729,15.65a.962.962,0,0,1-1,1H13.688a1,1,0,0,1,0-2H21.43A.96.96,0,0,1,22.429,53.854Z'%20transform='translate(0%200)'%3e%3c/path%3e%3c/g%3e%3c/svg%3e"
          alt="email"
          className="contact-img"
        />
        <a href="mailto:bnpfabric@gmail.com" className="contact-link">
          <span className="span-title">Email:</span> Infobnpfabric@gmail.com
        </a>
      </li>
      <li className="contact-items">
        <img
          src="data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='UTF-8'?%3e%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='43.805'%20height='43.805'%20viewBox='0%200%2043.805%2043.805'%3e%3cdefs%3e%3cstyle%3e.a{fill:%23f42c37;}%3c/style%3e%3c/defs%3e%3cg%20transform='translate(-16.488%20-16.488)'%3e%3cg%20transform='translate(16.488%2016.488)'%3e%3cpath%20class='a'%20d='M32.188,55.422a18.33,18.33,0,0,0,25.853,0l.546-.546a2.853,2.853,0,0,0,0-4.031l-6.808-6.808a2.85,2.85,0,0,0-4.031,0l-3.013,3.013a1.832,1.832,0,0,1-2.516,0L30.194,35.025a1.781,1.781,0,0,1,0-2.516L33.206,29.5a2.854,2.854,0,0,0,0-4.031L26.4,18.658a2.853,2.853,0,0,0-4.031,0l-.545.545a18.33,18.33,0,0,0,0,25.853Zm-8.517-34.37.545-.545a.237.237,0,0,1,.334,0l6.808,6.808a.237.237,0,0,1,0,.334L28.345,30.66a4.4,4.4,0,0,0,0,6.213L40.371,48.9a4.4,4.4,0,0,0,6.213,0L49.6,45.887a.237.237,0,0,1,.334,0l6.808,6.808a.237.237,0,0,1,0,.334l-.546.546a15.717,15.717,0,0,1-22.156,0L23.671,43.208a15.716,15.716,0,0,1,0-22.156Z'%20transform='translate(-16.488%20-16.951)'%3e%3c/path%3e%3cpath%20class='a'%20d='M64.9,40.531a1.308,1.308,0,0,0,1.27-1.619A18.622,18.622,0,0,0,53.493,26.238a1.307,1.307,0,0,0-.624,2.539A16.029,16.029,0,0,1,63.627,39.535,1.308,1.308,0,0,0,64.9,40.531Z'%20transform='translate(-28.747%20-19.853)'%3e%3c/path%3e%3cpath%20class='a'%20d='M51.108,35.949a1.307,1.307,0,1,0-.624,2.539,9.628,9.628,0,0,1,5.97,5.97,1.307,1.307,0,1,0,2.539-.624,12.168,12.168,0,0,0-7.886-7.886Z'%20transform='translate(-27.92%20-23.217)'%3e%3c/path%3e%3cpath%20class='a'%20d='M55.879,16.526a1.307,1.307,0,0,0-.624,2.539A22.518,22.518,0,0,1,70.8,34.612a1.307,1.307,0,1,0,2.539-.624A25.125,25.125,0,0,0,55.879,16.526Z'%20transform='translate(-29.573%20-16.488)'%3e%3c/path%3e%3c/g%3e%3c/g%3e%3c/svg%3e"
          alt="phone"
          className="contact-img"
        />
        <a href="tel:+998933837585" className="contact-link">
          <span className="span-title">Tel:</span> +998 93 383 75 85
        </a>
      </li>
      <li className="contact-items">
        <img
          src="https://bnpfabrik.vercel.app/assets/location-Spm7UTc1.svg"
          alt="location"
          className="contact-img"
        />
        <a href="mailto:bnpfabric@gmail.com" className="contact-link">
          <span className="span-title">Manzil:</span> Buxoro, st alpomish 80 uy
        </a>
      </li>
    </ul>
  );
};

export default ContactItem;
