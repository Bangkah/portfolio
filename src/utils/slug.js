export const toSlug = (title) => {
  if (!title || typeof title !== 'string') return '';
  return title
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
};