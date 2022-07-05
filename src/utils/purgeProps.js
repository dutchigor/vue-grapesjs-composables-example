export default function purgeProps(props) {
  return Object.keys(props).reduce((purged, key) => {
    if (typeof props[key] !== 'undefined') purged[key] = props[key]
    return purged
  }, {})
}