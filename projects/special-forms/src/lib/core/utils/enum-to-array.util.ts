export const EnumToArray = (enu: any) => {
  return Object.keys(enu).map((key) => ({
    id: key,
    value: enu[key],
  }));
};
