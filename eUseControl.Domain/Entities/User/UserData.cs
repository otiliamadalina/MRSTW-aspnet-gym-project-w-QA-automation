﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace eUseControl.Domain.Entities.User
{
    class UserData
    {
          public int Id { get; set; }
          public string Username { get; set; }
          public string Email { get; set; }
          public string PasswordHash { get; set; }
          public DateTime CreatedAt { get; set; } = DateTime.UtcNow;
     }
}
