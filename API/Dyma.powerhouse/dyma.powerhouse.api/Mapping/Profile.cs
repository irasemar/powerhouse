using System;
using AutoMapper;
using dyma.powerhouse.data.entity;
using dyma.powerhouse.data.views;
using dyma.powerhouse.api.Models;

namespace dyma.powerhouse.api.Mapping
{
    public class Profile : AutoMapper.Profile
    {
        public Profile()
        {
            //this.CreateMap<long, DateTime>().ConvertUsing(new LongDatetimeConverter());
            //this.CreateMap<DateTime, long>().ConvertUsing(new DateTimeTypeConverter());
            //this.CreateMap<long?, DateTime?>().ConvertUsing(new LongDatetimeConverterNull());
            //this.CreateMap<DateTime?, long?>().ConvertUsing(new DateTimeTypeConverterNull());
            //this.CreateMap<DateTime?, object>().ConvertUsing(new DateTimeToObjectTypeConverter());
            //this.CreateMap<DateTime?, DateTime>().ConvertUsing(new DateTimeToDatetimeTypeConverterNull());
            //this.CreateMap<DateTime, DateTime?>().ConvertUsing(new DateTimeToDatetimeNullTypeConverterNull());

            //this.CreateMap<PlantaForm, PlantaCatalogo>();
            //this.CreateMap<PlantaCatalogo, CustomerForm>();

        }

        public class DateTimeTypeConverter : ITypeConverter<DateTime, long>
        {
            public long Convert(DateTime source, long destination, ResolutionContext context)
            {
                return (long)source.ToUniversalTime().Subtract(new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)).TotalMilliseconds;
            }
        }

        public class LongDatetimeConverter : ITypeConverter<long, DateTime>
        {
            public DateTime Convert(long source, DateTime destination, ResolutionContext context)
            {
                //long beginTicks = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc).Ticks;
                //DateTime dt = new DateTime(beginTicks + source * 10000, DateTimeKind.Utc);
                DateTime dt = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc).AddMilliseconds(source);
                return dt;
            }
        }

        public class DateTimeToObjectTypeConverter : ITypeConverter<DateTime?, object>
        {
            public object Convert(DateTime? source, object destination, ResolutionContext context)
            {
                if (source != null)
                {
                    DateTime d1 = new DateTime(1970, 1, 1, 0, 0, 0);
                    DateTime d2 = new DateTime(1970, 1, 1, source.Value.Hour, source.Value.Minute, 0);
                    TimeSpan ts = new TimeSpan(d2.Ticks - d1.Ticks);
                    return ts.TotalMilliseconds;
                    //DateTime d1 = new DateTime(1970, 1, 1);
                    //DateTime d2 = source.Value.ToUniversalTime();
                    //TimeSpan ts = new TimeSpan(d2.Ticks - d1.Ticks);
                    //return ts.TotalMilliseconds;
                }
                else
                    return null;
            }
        }

        public class DateTimeTypeConverterNull : ITypeConverter<DateTime?, long?>
        {
            public long? Convert(DateTime? source, long? destination, ResolutionContext context)
            {
                if (source != null)
                {
                    return (long)source.Value.ToUniversalTime().Subtract(new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc)).TotalMilliseconds;
                }
                else
                {
                    return null;
                }
            }
        }

        public class LongDatetimeConverterNull : ITypeConverter<long?, DateTime?>
        {
            public DateTime? Convert(long? source, DateTime? destination, ResolutionContext context)
            {
                if (source != null)
                {
                    //long beginTicks = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc).Ticks;
                    //DateTime dt = new DateTime(beginTicks + source.Value * 10000, DateTimeKind.Utc);
                    DateTime dt = new DateTime(1970, 1, 1, 0, 0, 0, DateTimeKind.Utc).AddMilliseconds(source.Value);
                    return dt;
                }
                else
                {
                    return null;
                }
            }
        }

        public class DateTimeToDatetimeTypeConverterNull : ITypeConverter<DateTime?, DateTime>
        {
            public DateTime Convert(DateTime? source, DateTime destination, ResolutionContext context)
            {
                if (source != null)
                {
                    return source.Value;
                }
                else
                {
                    return DateTime.UtcNow;
                }
            }
        }

        public class DateTimeToDatetimeNullTypeConverterNull : ITypeConverter<DateTime, DateTime?>
        {
            public DateTime? Convert(DateTime source, DateTime? destination, ResolutionContext context)
            {
                return source;
            }
        }
    }
}