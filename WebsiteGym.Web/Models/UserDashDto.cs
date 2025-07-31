﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using eUseControl.Domain.Entities.User;

namespace WebsiteGym.Web.Models
{
     public class UserDashDto
     {
          public string UserName { get; set; }
          public string Email { get; set; }
          public bool MembershipStatus { get; set; }
          public DateTime RegisterDateTime { get; set; }
          public int? UserMembershipID { get; set; }
          public DateTime? MembershipExpiration { get; set; }
          public string MembershipType { get; set; }
          public DateTime? MembershipPurchaseDate { get; set; }
          public byte[] QrCodeImage { get; set; } 
          public string PhoneNumber { get; set; }
          public string FullName { get; set; }
          public byte[] ProfilePicture { get; set; }
          public int? RemainingDays
          {
               get
               {
                    if (MembershipExpiration == null) return null;
                    var days = (MembershipExpiration.Value - DateTime.Now).Days;
                    return Math.Max(days, 0);
               }
          }

          public int MembershipProgressPercent
          {
               get
               {
                    if (MembershipPurchaseDate == null || MembershipExpiration == null) return 0;

                    double totalDays = (MembershipExpiration.Value - MembershipPurchaseDate.Value).TotalDays;
                    double usedDays = (DateTime.Now - MembershipPurchaseDate.Value).TotalDays;

                    if (totalDays <= 0) return 0;

                    int progress = (int)(100 - (usedDays / totalDays * 100));
                    progress = Math.Max(0, Math.Min(100, progress));
                    return progress;

               }
          }

     }
}