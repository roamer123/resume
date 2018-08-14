declare 
@i int;
type char_list is varray(5) of varchar;
tech_list
:= char_list
('WEBFRONT', 'JAVA', 'DATA_MINING', 'ALGORITHM', 'IOS');

set @i=1
while @i <=100
begin
  insert into CANDIDATE
  values
    (@i, '李楠', arr_id(@i), '3', 'JUNIOR', 'LEVEL_MIDDLE', '13628636554', 'sdds@163.com', '12000', '15000', '0', '宇宙', 'PROCESS_NEW', 'STATUS_DOING', 'SUPPLIER_WSHH', null, '2018-07-12 10:05:22.000000', '2018-07-13 10:05:29.000000', '2018-07-12 10:05:35.000000', '2018-07-12 10:05:40.000000', '2018-07-12 10:05:45.000000', '2018-07-12 10:05:47.000000', null, '2018-07-19 10:05:58.000000', null, null, 'system', '2018-07-12 10:06:14.000000', 'system', '2018-07-12 10:06:18.000000', null, null, null
);
  set @i=@i+1
end