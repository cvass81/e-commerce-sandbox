import React from 'react';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import useStyles from './styles';

const Item = ({ name, imageUrl, price, quantity }) => {
  const classes = useStyles();

  return (
    <>
      <ListItemAvatar>
        <Avatar
          className={classes.avatar}
          variant="square"
          alt={name}
          src={imageUrl}
        />
      </ListItemAvatar>
      <ListItemText primary={name} secondary={`${quantity} X ${price}`} />
    </>
  );
};

export default Item;
