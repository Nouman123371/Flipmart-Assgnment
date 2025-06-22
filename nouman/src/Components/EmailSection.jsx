export default function EmailSection(){
   return (

      <div className="mainbody4">
        <div className="paypal">
          <div className="pp n" />
          <div className="visa n" />
          <div className="ae n" />
          <div className="mc n" />
        </div>
        <div className="email">
          <p style={{width: '40%'}}>Sign Up for Emails</p>
          <input placeholder="Enter your email address" style={{height: '2.5rem', border: 'none', fontSize: '0.8rem', width: '70%', textAlign: 'left', paddingLeft: '0.5rem'}} />
          <div className="subscribe">
            <i className="fa-solid fa-envelope" style={{marginRight: '0.2rem'}} />
            <p>Subscribe</p>
          </div>
        </div>
      </div>
    );  
} 