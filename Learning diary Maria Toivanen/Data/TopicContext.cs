using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Learning_diary_Maria_Toivanen.Models;

namespace Learning_diary_Maria_Toivanen.Data
{
    public class TopicContext : DbContext
    {
        public TopicContext (DbContextOptions<TopicContext> options)
            : base(options)
        {
        }

        public DbSet<Learning_diary_Maria_Toivanen.Models.Topic> Topic { get; set; }
    }
}
