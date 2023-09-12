const Button = (props) => {
  const { className, name } = props;
  return <button className={className}>{name}</button>;
};

const element = (
  <div className="bg-container">
    <div className="card">
      <h1 className="heading">Social Buttons</h1>
      <div className="button">
        <Button className="like-btn" name="Like" />
        <Button className="cmt-btn" name="Comment" />
        <Button className="share-btn" name="Share" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
