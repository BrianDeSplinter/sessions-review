-- insert into cars(make, model, miles, year, color)
-- values($1, $2, $3, $4, $5)
-- returning *;

-- uses object instead of array to insert data (less error prone)
insert into cars(make, model, miles, year, color)
values(${make}, ${model}, ${miles}, ${year}, ${color})
returning *;