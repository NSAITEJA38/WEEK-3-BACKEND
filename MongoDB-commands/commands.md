# 1.Check existing databases
    >show dbs
output:
    admin         40.00 KiB
    anuragdb     120.00 KiB
    anuragdb2    136.00 KiB
    config       108.00 KiB
    ecomdemo     180.00 KiB
    ecommercedb   20.00 KiB
    local         64.00 KiB
-------------------------------
# 2.Create Database use database-name
    >use practice
---------------------------------
# 3.Create collection(tables in RDBMS) db.createCollection("name-of-collection") -> Check collections of a database show collections
    >db.createCollection("stu_details")
=>output:
    { ok: 1 }
---------------------------------------
# 4.Insert Documents into that collection(rows inRDBMS) db.collection-name.insertOne(document) db.collection-name.insertMany([d1,d2,...]) Structure of a mongodb Document: { "name":"ravi", "age":21, "city":"hyderabad" }
1.    >db.stu_details.insertOne({"name":"sai","age":21,"city":"nlg"})
=>output:
    {
    acknowledged: true,
    insertedId: ObjectId('6980d0254d64dbd427f42fde')
    }
2.  >db.stu_details.insertMany({"name":"teja","age":20,"city":"hyderabad"},{"name":"Ravi","age":22,"city":"vizag"})
=>output:
    {
    acknowledged: true,
    insertedIds: {
        '0': ObjectId('6980d0db4d64dbd427f42fdf'),
        '1': ObjectId('6980d0db4d64dbd427f42fe0')
        }
    }
--------------------------------------
# 5.Read Documents db.collection-name.findOne() db.collection-name.find()
  -> Query operators:-
  ------------------
  1. $eq(===):
   ----------
    >db.stu_details.findOne({"age":{$eq:22}})
=>output:
    {
    _id: ObjectId('6980d0db4d64dbd427f42fe0'),
    name: 'Ravi',
    age: 22,
    city: 'vizag'
    }
  
  2. $gt(>)
   -------
    >db.stu_details.findOne({"age":{$gt:20}})
=>output:
    {
    _id: ObjectId('6980d0254d64dbd427f42fde'),
    name: 'sai',
    age: 21,
    city: 'nlg'
    }
    >db.stu_details.find({"age":{$gt:20}})
=>output:
    {
    _id: ObjectId('6980d0254d64dbd427f42fde'),
    name: 'sai',
    age: 21,
    city: 'nlg'
    }
    {
    _id: ObjectId('6980d0db4d64dbd427f42fe0'),
    name: 'Ravi',
    age: 22,
    city: 'vizag'
    }
 3. $gte (>=)
  -----------
    >db.stu_details.findOne({"age":{$gte:20}})
=>output:
    {
    _id: ObjectId('6980d0254d64dbd427f42fde'),
    name: 'sai',
    age: 21,
    city: 'nlg'
    }

    >db.stu_details.find({"age":{$gte:20}})
=>output:
    {
    _id: ObjectId('6980d0254d64dbd427f42fde'),
    name: 'sai',
    age: 21,
    city: 'nlg'
    }{
    _id: ObjectId('6980d0db4d64dbd427f42fdf'),
    name: 'teja',
    age: 20,
    city: 'hyderabad'
    }
    {
    _id: ObjectId('6980d0db4d64dbd427f42fe0'),
    name: 'Ravi',
    age: 22,
    city: 'vizag'
    }
4.  $lt  (<)
------------
    > db.stu_details.findOne({"age":{$lt:21}})
=>output:
    {
    _id: ObjectId('6980d0db4d64dbd427f42fdf'),
    name: 'teja',
    age: 20,
    city: 'hyderabad'
    }

    >db.stu_details.find({"age":{$lt:22}})
=>output:
    {
    _id: ObjectId('6980d0254d64dbd427f42fde'),
    name: 'sai',
    age: 21,
    city: 'nlg'
    }
    {
    _id: ObjectId('6980d0db4d64dbd427f42fdf'),
    name: 'teja',
    age: 20,
    city: 'hyderabad'
    }
5. $lte (<=)
-----------
    >db.stu_details.findOne({"age":{$lte:21}})
=>output:
    {
    _id: ObjectId('6980d0254d64dbd427f42fde'),
    name: 'sai',
    age: 21,
    city: 'nlg'
    }

    >db.stu_details.find({"age":{$lte:21}})
=>output:
    {
    _id: ObjectId('6980d0254d64dbd427f42fde'),
    name: 'sai',
    age: 21,
    city: 'nlg'
    }
    {
    _id: ObjectId('6980d0db4d64dbd427f42fdf'),
    name: 'teja',
    age: 20,
    city: 'hyderabad'
    }
6.  $ne  (!=)
------------
    >db.stu_details.findOne({"age":{$ne:21}})
=>output:
    {
    _id: ObjectId('6980d0db4d64dbd427f42fdf'),
    name: 'teja',
    age: 20,
    city: 'hyderabad'
    }

    >db.stu_details.find({"age":{$ne:21}})
=>output:
    {
    _id: ObjectId('6980d0db4d64dbd427f42fdf'),
    name: 'teja',
    age: 20,
    city: 'hyderabad'
    }
    {
    _id: ObjectId('6980d0db4d64dbd427f42fe0'),
    name: 'Ravi',
    age: 22,
    city: 'vizag'
    }
7. $in
------
    >db.stu_details.findOne({"age":{$in:[20,23]}})
=>output:
    {
    _id: ObjectId('6980d0db4d64dbd427f42fdf'),
    name: 'teja',
    age: 20,
    city: 'hyderabad'
    }

    >db.stu_details.findOne({"age":{$in:[20,23]}})
=>output:
    {
    _id: ObjectId('6980d0db4d64dbd427f42fdf'),
    name: 'teja',
    age: 20,
    city: 'hyderabad'
    }
    {
    _id: ObjectId('6980d0db4d64dbd427f42fdf'),
    name: 'teja',
    age: 20,
    city: 'hyderabad'
    }

->Logical Operators:-
---------------------
1. $and  (&&)
    >db.stu_details.findOne({$and:[{age:{$gt:10}},{city:"hyderabad"}]})
=>output:
    {
    _id: ObjectId('6980d0db4d64dbd427f42fdf'),
    name: 'teja',
    age: 20,
    city: 'hyderabad'
    }

2. $or   (||)
    >db.stu_details.findOne({$or:[{city:"hyderabad"},{age:{$gt:20}}]})
=>output:
    {
    _id: ObjectId('6980d0254d64dbd427f42fde'),
    name: 'sai',
    age: 21,
    city: 'nlg'
    }
3. $not  (! )
    >db.stu_details.find({age:{$not:{$gt:22}}})
=>output:
{
  _id: ObjectId('6980d0254d64dbd427f42fde'),
  name: 'sai',
  age: 21,
  city: 'nlg'
}
{
  _id: ObjectId('6980d0db4d64dbd427f42fdf'),
  name: 'teja',
  age: 20,
  city: 'hyderabad'
}
{
  _id: ObjectId('6980d0db4d64dbd427f42fe0'),
  name: 'Ravi',
  age: 22,
  city: 'vizag'
}

# 6.Update a document db.collection-name.updateOne(condition,update) db.collection-name.updateMany(condition,update)

    >db.stu_details.updateOne({name:"Ravi"},{$set:{age:22}})
=>output:
    {
    acknowledged: true,
    insertedId: null,
    matchedCount: 1,
    modifiedCount: 1,
    upsertedCount: 0
    }
    >db.stu_details.updateMany({city:"hyderabad"},{$set:{city:"HYD"}})
=>output:
    {
    acknowledged: true,
    insertedId: null,
    matchedCount: 1,
    modifiedCount: 1,
    upsertedCount: 0
    }
# 7.Delete a document db.collection-name.deleteOne(condition) db.collection-name.deleteMany(condition)
    >db.stu_details.deleteOne({ name: "sathwik" })
=>output:
    {
    acknowledged: true,
    deletedCount: 1
    }
    >db.stu_details.deleteMany({age:20})
output:
    {
    acknowledged: true,
    deletedCount: 2
    }


# 8.Reading from embeded document findOne/find({"main-field.nested-field":value})
    >db.students.findOne({ "marks.score": 90 })
=>output:
{
  _id: ObjectId('6983633e6fb5ff3576e9495d'),
  roll: 1,
  name: 'navadeep',
  subjects: [
    'DLD',
    'AI',
    'AP'
  ],
  marks: [
    {
      subject: 'DLD',
      score: 80
    },
    {
      subject: 'AI',
      score: 90
    }
  ]
}
    >db.students.find({ "marks.subject": "AI" })
=>output:
{
  _id: ObjectId('6983635a6fb5ff3576e9495e'),
  roll: 1,
  name: 'navadeep',
  subjects: [
    'DLD',
    'AI',
    'AP'
  ],
  marks: [
    {
      subject: 'DLD',
      score: 80
    },
    {
      subject: 'AI',
      score: 90
    },
    {
      subject: 'AP',
      score: 55
    }
  ]
}

# 9.Reading from array a. Single element comparision findOne/find({array-fleid:"element"}) b. Multiple elements comparision findOne/find({array-field:{$all:[element1,element-2,....]}})

    >db.students.find({subjects:{$all:["DLD","AI"]}})
=>output:
    {
  _id: ObjectId('6983635a6fb5ff3576e9495e'),
  roll: 1,
  name: 'navadeep',
  subjects: [
    'DLD',
    'AI',
    'AP'
  ],
  marks: [
    {
      subject: 'DLD',
      score: 80
    },
    {
      subject: 'AI',
      score: 90
    },
    {
      subject: 'AP',
      score: 55
    }
  ]
}
{
  _id: ObjectId('6983633e6fb5ff3576e9495d'),
  roll: 1,
  name: 'navadeep',
  subjects: [
    'DLD',
    'AI',
    'AP'
  ],
  marks: [
    {
      subject: 'DLD',
      score: 80
    },
    {
      subject: 'AI',
      score: 90
    }
  ]
}
# 10.Update embedded document updateOne/updateMany(condition,{ $set:{"field.nested-field":value}})

    >db.students.updateOne({"marks.subject":"AI"},{$set:{"marks.$.score":34}})
=>output:
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
# 11.Update array adding new element updateMany/updateOne(condition,{$push:{field:"element"}}) updateMany/updateOne(condition,{$push:{$each:["element-1,el2,....]}})

    >db.students.updateOne({roll:4},{$push:{subjects:"ML"}})
=>output:
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
    >db.students.updateOne({roll:4},{$push:{marks:{subject:"wsc",score:30}}});
=>output:
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
# 12.Updating array of documents updateMany/updateOne(condition,{$set:{"field.index.nested-field":value}})
    >db.students.updateOne({roll:3,"marks.subject":"chem"},{$set:{"marks.$.score":65}})
=>output:
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
