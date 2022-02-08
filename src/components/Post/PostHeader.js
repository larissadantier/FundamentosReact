import React from "react";
import PropTypes from "prop-types";
import Button from "../Button/index";

export default function PostHeader(props) {
  return (
    <>
      {props.post.read ? (
        <s>{props.post.title}</s>
      ) : (
        <strong>{props.post.title}</strong>
      )}
      <br />
      <Button onClick={() => props.onRemove(props.post.id)}>Remover</Button>
    </>
  );
}

PostHeader.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    read: PropTypes.bool.isRequired,
  }).isRequired,
};
