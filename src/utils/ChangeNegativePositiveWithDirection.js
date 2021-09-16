function ChangeNegativePositiveWithDirection(sign, direction) {
  return direction === 'ltr' ? sign : sign === `-` ? `+` : `-`;
}

export default ChangeNegativePositiveWithDirection;
