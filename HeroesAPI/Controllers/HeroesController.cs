using System;
using System.Collections;
using System.Collections.Generic;
using System.Web.Http;
using System.Web.Http.Cors;

namespace HeroesAPI.Controllers
{
    [EnableCors(origins: "http://localhost:4200", headers: "*", methods: "*")]
    [RoutePrefix("heroes")]
    public class HeroesController : ApiController
    {
        [Route("all")]
        public IHttpActionResult GetAllHeroes()
        {
            return Ok(new Heroes().HeroList);
        }

        [Route("{id}")]
        public IHttpActionResult GetHeroById(int id)
        {
            return Ok(new Heroes().HeroList[id-1]);
        }
    }

    class Hero
    {
        public int Id { get; set; }

        public string Name { get; set; }
    }

    class Heroes : IEnumerable<Hero>
    {
        public List<Hero> HeroList = new List<Hero>();

        public Heroes()
        {

            var heroNames = Enum.GetValues(typeof(HeroNames));

            int indexer = 1;

            foreach (var item in heroNames)
            {
                HeroList.Add(new Hero { Id = indexer, Name = item.ToString() });
                indexer++;
            }
        }

        public IEnumerator<Hero> GetEnumerator()
        {
            return HeroList.GetEnumerator();
        }

        IEnumerator IEnumerable.GetEnumerator()
        {
            return GetEnumerator();
        }
    }

    enum HeroNames
    {
        Batman,
        Spiderman,
        Ultimateman,
        Terriblewoman
    }
}
