export default function Form(){
     return (
      <div className="dataF">
        <div className="paraF">
          <form style={{textAlign: 'left'}}>
            <div className="row">
              <div className="form-group">
                <label htmlFor="name" style={{textAlign: 'left'}}><span className="required">*</span>Name</label>
                <input type="text" id="name" placeholder="john doe" required style={{textAlign: 'left'}} />
              </div>
              <div className="form-group">
                <label htmlFor="email" style={{textAlign: 'left'}}><span className="required">*</span>Email</label>
                <input type="email" id="email" placeholder="john.doe@gmail.com" required style={{textAlign: 'left'}} />
              </div>
            </div>
            <div className="form-group full-width">
              <label htmlFor="phone" style={{textAlign: 'left'}}>Telephone</label>
              <input type="tel" id="phone" />
            </div>
            <div className="form-group full-width">
              <label htmlFor="comment" style={{textAlign: 'left'}}><span className="required">*</span>Comment</label>
              <textarea id="comment" rows={4} required defaultValue={""} />
            </div>
            <p className="note" style={{textAlign: 'left'}}><span className="required">*</span> Required Fields</p>
            <button type="submit" className="submit-btn">
              <span className="triangle">▶</span> SUBMIT
            </button>
          </form>
        </div>
        <div className="options">
          <p>Company</p>
          <hr />
          <a href="#">&gt; &nbsp; About Us</a>
          <a href="#">&gt; &nbsp; Site Map</a>
          <a href="#">&gt; &nbsp; Terms of Service</a>
          <a href="#">&gt; &nbsp; Search Terms</a>
          <a href="#" style={{fontWeight: 'bolder', color: 'black'}}>&gt; &nbsp; Contect Us</a>
        </div>
      </div>
    );
}