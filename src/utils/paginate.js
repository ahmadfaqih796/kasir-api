const paginate = (query = {}) => {
   let { page = 1, limit = 10 } = query;
 
   page = Math.max(parseInt(page, 10), 1);
   limit = Math.max(parseInt(limit, 10), 1);
 
   const offset = (page - 1) * limit;
 
   return { limit, offset, page };
 };
 
 module.exports = paginate;
 